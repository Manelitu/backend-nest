import { Observable } from 'rxjs';

export interface UseCase<TModel> {
  handle(...args: any[]): Observable<TModel>;
}
