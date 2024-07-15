export interface AddIncident{
    Id: string;
    Title: string;
    Image: string;
    Location: string;
    Description: string;
}
export interface IncidentsResponse{
    Message: string;
}
export interface IncidentsAddRequest{
    Title: string;
    Image: string;
    Location: string;
    Description: string;
}
