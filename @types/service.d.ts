import Service from "@/lib/models/Entities/Service";

declare global {
  namespace ServiceApi {
    type GetServicesResponse = Api.Response<Service[]>;
  }
}
