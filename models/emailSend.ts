export interface EmailSend {
    to: string;
    from: string;
    subject: string;
    text: string;
    html: string;
}