export interface AddPoll{
    Id: string;
   
   
    Title: string;
    Options: string[];
    Description: string;
}
export interface PollResponse{
    Message: string;
}
export interface PollsAddRequest{
   
    Title: string;
    Options: string[];
    Description: string;
}