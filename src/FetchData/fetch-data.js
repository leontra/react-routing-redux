import { Endpoint } from './../Api/Services';

class FetchData { 
    get(ServiceName, parameters) {
        let URLName = Endpoint + ServiceName;
        Object.keys(parameters).forEach( key => {
            var regex = new RegExp("{{" + key + "}}", "g");
            URLName = URLName.replace(regex, parameters[key]);
        });

        // return new Promise((resolv, reject) => {
        //     var request = new XMLHttpRequest();
        //     request.withCredentials = false;

        //     request.addEventListener("load", function() {
        //         console.log('result', JSON.parse(this.responseText));
        //     });

        //     request.open(
        //         "GET", 
        //         "https://cors-anywhere.herokuapp.com/" + URLName + paramsFormatted
        //     );
            // request.setRequestHeader('Access-Control-Allow-Headers', '*');
            // request.setRequestHeader('Content-Type', 'application/json');
            // request.setRequestHeader('Access-Control-Allow-Origin', '*');
            // request.setRequestHeader("Origin", "");
            
            // oReq.setRequestHeader("Origin", 'localhost');
        //     request.send();

        // })
        
        // console.log("API: ", URLName + paramsFormatted);
        return fetch("https://cors-anywhere.herokuapp.com/" + URLName, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            } 
        })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                return {error: true, msg: response.responseText};
            }
        })
        .catch(error => ({error: true, msg: error} ));
    }
}

export default new FetchData();
