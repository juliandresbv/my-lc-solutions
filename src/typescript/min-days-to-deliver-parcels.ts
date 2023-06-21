function minDaysToDeliver(parcels: number[]) {
    const nonZeroParcels = parcels.filter(parcel => parcel > 0);
    const minDays = new Set(nonZeroParcels);

    return minDays.size;
}