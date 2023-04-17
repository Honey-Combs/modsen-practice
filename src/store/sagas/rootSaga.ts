import { all } from 'redux-saga/effects';
import { dailyWeatherForecastSaga } from '@/store/sagas/dailyWeatherForecastSaga';
import { geocodingSaga } from '@/store/sagas/geocodingSaga';

export default function* rootSaga() {
  yield all([dailyWeatherForecastSaga(), geocodingSaga()]);
}
