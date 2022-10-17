import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import { Employee } from "@/abstracts/employee";

export default defineComponent({
  name: 'FormComponent',
  props: ['options'],

  data() {
    return {
      form: {
        id: null,
        name: null,
        phone: null,
        staff: {},
      },
    }
  },

  methods: {
    ...mapGetters(['getDataEmployees']),
    ...mapMutations(['setDataEmployees', 'setSelectEmployees']),

    handleSubmit() {
      const employees = this.getDataEmployees();
      this.form.id = employees.length + 1;
      employees.map((item: Employee) => {
        if (this.form.staff === item.id) {
          item.staff = this.form;
          item._showDetails = true;
          // По 4 пункту задачи. Глубина вложенности будет неограниченной, но приведет к переполнению стека.
          // this.form.staff = item
        }
      });

      employees.push(this.form);

      this.setDataEmployees(employees);
      this.setSelectEmployees(employees);

      this.form = {
        id: null,
        name: null,
        phone: null,
        staff: {},
      };
    }
  },
})