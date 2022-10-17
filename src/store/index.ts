import { createStore } from 'vuex';
import dataEmployees from '@/store/data/employees.json'
import LocalStorage from '@/core/utils/local-storage';
import { Employee } from '@/abstracts/employee';

export const DATA_EMPLOYEES = 'dataEmployees';
export const SET_DATA_EMPLOYEES = 'setDataEmployees';
export const SET_SELECT_EMPLOYEES = 'setSelectEmployees';

export default createStore({
  state: {
    dataEmployees: [],
    selectEmployees: []
  },
  getters: {
    getDataEmployees() {
      return LocalStorage.getValue(DATA_EMPLOYEES);
    },
  },

  mutations: {
    setDataEmployees(state, prop) {
      state.dataEmployees = prop;
      LocalStorage.setValue(DATA_EMPLOYEES, prop);
    },

    setSelectEmployees(state, prop) {
      const dataForSelect = prop.map((item: Employee) => {
        return {
          value: item.id,
          text: item.name,
        }
      })

      state.selectEmployees = dataForSelect;
    },
  },

  actions: {
    initDataEmployees(context) {
      const employees = LocalStorage.getValue(DATA_EMPLOYEES);

      if (employees) {
        context.commit(SET_DATA_EMPLOYEES, employees);
        context.commit(SET_SELECT_EMPLOYEES, employees);
      } else {
        LocalStorage.setValue(DATA_EMPLOYEES, dataEmployees);
        context.commit(SET_DATA_EMPLOYEES, dataEmployees);
        context.commit(SET_SELECT_EMPLOYEES, dataEmployees);
      }
    }
  },
  modules: {},
});
