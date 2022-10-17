import { defineComponent } from 'vue';
import { mapGetters, mapState } from 'vuex';

import TableComponent from '@/components/BaseTable/BaseTable.vue';
import ButtonComponent from '@/components/BaseButton/BaseButton.vue';
import FormComponent from '@/components/BaseForm/BaseForm.vue';
import ModalComponent from '@/components/BaseModal/BaseModal.vue';


export default defineComponent({
  name: 'EmployeesView',
  components: {
    TableComponent,
    FormComponent,
    ButtonComponent,
    ModalComponent,
  },

  computed: {
    ...mapState([
      'selectEmployees',
      'dataEmployees',
    ]),
  },

  methods: {
    ...mapGetters(['getDataEmployees']),
  },
})