import useSWR from 'swr';

import axios from '@/app/axios';

import CustomerDetailsList from '@/app/components/saved-details/SavedDetailsList';


const fetcher = async (url: string) => {
  const response = await axios.get(url);

  return response.data;
}


const CustomerDetailsPage = () => {

  // const { data, error } = useSWR('/cloth', fetcher);

  return (
    <main>

      <CustomerDetailsList />
    </main>
  )
}

export default CustomerDetailsPage;