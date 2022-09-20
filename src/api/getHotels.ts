
export const getHotels = async () => {
    try {
        const data = await fetch("http://localhost:5000/api/hotels");
        const json = await data.json();
        return json;
    } catch (e) {
        console.log(e)
    }

}