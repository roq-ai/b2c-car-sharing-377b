import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  customer_id: yup.string().nullable(),
  car_id: yup.string().nullable(),
});
