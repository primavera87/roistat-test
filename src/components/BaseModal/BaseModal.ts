import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ModalComponent',
    props: ['modalTitle', 'modalText', 'modalId'],
})