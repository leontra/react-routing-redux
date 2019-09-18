import FetchData from './../FetchData/fetch-data'; 
import API_DICTIONARY from "./../Api/api-dictionary";

class CivilizationsPresenter {

    async getCivilizations(DisplayError) {
        const data = await FetchData.get(API_DICTIONARY.CIVILIZATIONS, []);
        if (data && typeof data.civilizations !== 'undefined') {
            return data.civilizations;
        }
        
        DisplayError(data);
        return [];
    }

    async getCivilizationDetail(id, DisplayError) {
        const data = await FetchData.get(API_DICTIONARY.CIVILIZATION_DETAIL, {id: id});
        if (data) {
            return data;
        }
        
        DisplayError(data);
        return [];
    }
    
}

export default CivilizationsPresenter;