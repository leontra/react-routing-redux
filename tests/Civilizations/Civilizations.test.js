import React from 'react';
import ReactDOM from 'react-dom';
import "core-js/stable";
import "regenerator-runtime/runtime";

import CivilizationsPresenter from '../../src/Civilizations/Civilizations.presenter';
import { spreadCivilizations } from '../../src/Civilizations/Civilization.actions';
import { resetState } from '../../src/ResetState/reset_state.action';

import store from '../../src/Store/main';

it('Get the civilizations list', () => {
  global.fetch = function(url) {
      return new Promise((resolve, reject) => {
          resolve({status: 200, json: () => ({status: 1, civilizations: [{}]}) });
      });
  }
  
  const presenter = new CivilizationsPresenter();
  return presenter.getCivilizations()
  .then(list => {
    expect(list.length).toBe(1);
  });
});

it('Get the given civilization detail', () => {
  global.fetch = function(url) {
      return new Promise((resolve, reject) => {
          resolve({status: 200, json: () => ({name: 'test'} ) });
      });
  }
  
  const presenter = new CivilizationsPresenter();
  return presenter.getCivilizationDetail('test')
  .then(element => {
    expect(element.name).toBe('test');
  });
});

it('Get the civilizations list with error', (done) => {
  global.fetch = function(url) {
      return new Promise((resolve, reject) => {
          resolve({json: () => ({error: true}) });
      });
  }
  
  const presenter = new CivilizationsPresenter();
  const OnError = error => {
    expect(error.error).toBe(true);
    done();
  }
  presenter.getCivilizations(OnError)
  .then(_list => {
    expect(_list.length).toBe(0);
  });
});

it('Updates the reducer state after the store dispatch', (done) => {
  let currentValue;
  
  const unsubscribe = store.subscribe(() => {
    let previousValue = currentValue;
    currentValue = store.getState()["CivilizationReducer"];
    
    if (previousValue !== currentValue) {
      expect(currentValue.civilizations.length).toBe(1);
      expect(currentValue.civilizations[0]['name']).toBe('test');
      
      done();
    }
  });
  
  store.dispatch( spreadCivilizations( [{name: 'test'}] ) );
  unsubscribe();

});

it('Resets the civilization store to the initial state', (done) => {
  store.dispatch( resetState( ) );
  
  store.dispatch( spreadCivilizations( [{name: 'test'}] ) );
  let civilizationReducerState = store.getState()["CivilizationReducer"];
  expect(civilizationReducerState.civilizations.length).toBe(1);
  
  store.dispatch( resetState( ) );
  civilizationReducerState = store.getState()["CivilizationReducer"];
  expect(civilizationReducerState.civilizations.length).toBe(0);
  
  done();
});
