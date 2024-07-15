export interface AddView{
    Id: string;
   
    Image: string;
    Title: string;
    Description: string;
}
export interface ViewResponse{
    Message: string;
}
export interface ViewAddRequest{
    Image: string;
    Title: string;
    Description: string;
}