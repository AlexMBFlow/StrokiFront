import { makeAutoObservable } from "mobx"; 

interface IHotels {
    room: string
    price: number
    places: number
}

interface IStore {
    hotels: IHotels[]
    isLoading: boolean
}

class Store implements IStore {
    public hotels: IHotels[] = [];
    public isLoading: boolean = true

    constructor() {
        makeAutoObservable(this);
    }

    setHotels = (hotels: IHotels[]): void => {
        this.hotels = hotels;
    }

    setIsLoading = (isLoading: boolean) => {
        this.isLoading = isLoading
    }

    getHotels = (): IHotels[] => {
        return this.hotels
    }
}

export default new Store()