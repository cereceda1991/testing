import LeadExternal from "../domain/lead-external.repository";
import LeadRepository from "../domain/lead.repository";

export class LeadCreate {
  private leadRepository: LeadRepository;
  private leadExternal: LeadExternal;
  constructor(respositories: [LeadRepository, LeadExternal]) {
    const [leadRepository, leadExternal] = respositories;
    this.leadRepository = leadRepository;
    this.leadExternal = leadExternal;
  }
 // Método para enviar mensajes y guardar el lead en la base de datos
  public async sendMessageAndSave({
    message,
    phone,
  }: {
    message: string;
    phone: string;
  }) {
    const responseDbSave = await this.leadRepository.save({ message, phone });//TODO Guardar en la base de datosDB
    const responseExSave = await this.leadExternal.sendMsg({ message, phone });//TODO enviar a ws
    return {responseDbSave, responseExSave};
  }
}
