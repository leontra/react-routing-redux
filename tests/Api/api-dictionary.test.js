import API_DICTIONARY from "../../src/Api/api-dictionary";

it('Is the correct service name for GET Civilizations', () => {
    expect(API_DICTIONARY.CIVILIZATIONS).toBe("civilizations");
});

it('Is the correct service name for GET Civilization Detail', () => {
    expect(API_DICTIONARY.CIVILIZATION_DETAIL).toBe("civilization/{{id}}");
});