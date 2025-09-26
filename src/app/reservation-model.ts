export interface ReservationModel {
    id: number;
    // userId
    // inventoryId
    startDate: Date;
    endDate?: Date;
    isActive: boolean;
    // roomId
    comment?: string;
}
