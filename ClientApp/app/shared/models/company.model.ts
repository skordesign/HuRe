interface Company extends Base{
    name: string;
    shortName: string;
    address: string;
    phoneNumber: string;
    website: string;
    scales: string;
    urlLogo: string;
    representor: string;
    description: string;
    jobGroupId: number;
    jobGroup: JobGroup;
}