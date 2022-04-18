import BodyPage from './components/BodyPage.vue'
import PaymentMethod from './components/HandlingTariff/PaymentMethod.vue'
import PaymentDetails from './components/HandlingTariff/PaymentDetails.vue'
import PaymentWorkspace from "@/components/HandlingTariff/PaymentWorkspace";

export const routes = [
    {
        path: '/account',
        name: 'BodyPage',
        component: BodyPage,
    },
    {
        path: '/account/method',
        name: 'PaymentMethod',
        component: PaymentMethod,
        meta: {
            title: 'Выберите способ оплаты'
        }
    },
    {
        path: '/account/details',
        name: 'PaymentDetails',
        component: PaymentDetails,
        props: true
    },
    {
        path: '/account/workspace',
        name: 'PaymentWorkspace',
        component: PaymentWorkspace,
        props: true
    },
]