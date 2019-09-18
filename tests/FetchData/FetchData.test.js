import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";
import FetchData from '../../src/FetchData/fetch-data';

it('Do Fetch Data with success response', async () => {

    global.fetch = function(url) {
        return new Promise((resolve, reject) => {
            resolve({status: 200, json: () => ({status: 1}) });
        });
    }
    
    const data = await FetchData.get("test_service", [])
    expect(data.status).toBe(1);
});

it('Do Fetch Data && Params with success response', async () => {

    global.fetch = function(url) {
        return new Promise((resolve, reject) => {
            const urlParams = url.split('/');
            if (urlParams[urlParams.length - 1] === 'test') {
                resolve({status: 200, json: () => ({status: 1}) });
            } else {
                reject({status: 100, json: () => ({status: 0}) });
            }
        });
    }
    
    const data = await FetchData.get("test_service/{{id}}", {
        id: 'test'
    })
    expect(data.status).toBe(1);
});

it('Do Fetch Data with no success response', async () => {

    global.fetch = function(url) {
        return new Promise((resolve, reject) => {
            const urlParams = url.split('/');
            if (urlParams[urlParams.length - 1] === 'test') {
                reject({status: 100, json: () => ({status: 0}) });
            } else {
                resolve({status: 200, json: () => ({status: 1}) });
            }
        });
    }
    
    const data = await FetchData.get("test_service/{{id}}", {
        id: 'test'
    })
    expect(data.error).toBe(true);
});

it('Do Fetch Data && Params with no success response', async () => {

    global.fetch = function(url) {
        return new Promise((resolve, reject) => {
            reject({error: true});
        });
    }
    
    const data = await FetchData.get("test_service", [])
    expect(data.error).toBe(true);
});
