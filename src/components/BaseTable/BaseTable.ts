import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TableComponent',
  props: ['tableData'],

  data() {
    return {
      sortBy: 'name',
      sortDesc: false,
      fieldsTable: [
        {
          key: 'name',
          sortable: true,
        },
        {
          key: 'phone',
          sortable: true
        },
        {
          key: 'show_details',
          label: 'show_details'
        }
      ]
    }
  },
});