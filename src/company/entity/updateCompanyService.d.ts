declare type IUpdateCompanyService = {
    id: string;

    name?: string;
    durationS?: number;
    description?: string;
    price?: number;

    companyId?: string;
}