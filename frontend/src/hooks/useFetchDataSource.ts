import { useEffect, useState } from 'react';
import makeApiRequest from '../api/makeApiRequest';

const useFetchDataSource = (endpoint: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<null | any>(null);

  useEffect(() => {
    makeApiRequest(endpoint)
    .then(d => {
      setData(d);
      setIsLoading(false);
    })
  }, [endpoint]);
  return { isLoading, data };
};

export default useFetchDataSource;