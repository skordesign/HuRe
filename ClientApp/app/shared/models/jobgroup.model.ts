interface JobGroup extends Base{
    name: string;
    description: string;
    shortName: string;
    imageUrl:string;
    cVs: CV[];
    companies: Company[];
}