import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { productsActions } from '../store/productsSlice';
import { fetchStatusActions } from '../store/fetchStatusSlice';


const FetchItems = () => {

  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted())
    fetch("https://fakestoreapi.com/products", { signal })
      .then((res) => res.json())
      .then(( products ) => {
        dispatch(fetchStatusActions.markFetchDone())
        dispatch(fetchStatusActions.markFetchingFinished())

        dispatch(productsActions.addInitialItems(products))

      });
    return () => {
      controller.abort();
    }
  }, [fetchStatus]);

  return (
    <></>
  )
}

export default FetchItems