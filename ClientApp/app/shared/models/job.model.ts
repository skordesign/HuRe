interface Job extends Base {
    place: string;
    title: string;
    shortDescription: string;
    requirement: string;
    experience: string;
    position: string;
    certificate: string;
    benefit: string;
    number: string;
    timePre: string;
    majorTag: string;
    sex: string;
    age: string;
    deadlineApply:Date;
    contactor: string;
    contactAddress: string;
    contactPhone: string;
    appliedCount: number;
    viewCount: number;
    lowestSalary: number;
    highestSalary:number;
    more:string;
    companyId: number;
    company: Company;
    workTypeId:number;
    workType: WorkType;
    jobGroupId:number;
    jobGroup:JobGroup;
    contentURL:string;
    applys:Apply[]
}