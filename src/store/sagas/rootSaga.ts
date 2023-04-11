import { all } from 'redux-saga/effects';
import { dailyWeatherForecastSaga } from '@/store/sagas/dailyWeatherForecastSaga';

export default function* rootSaga() {
  yield all([dailyWeatherForecastSaga()]);
}
