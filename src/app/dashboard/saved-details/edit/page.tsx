import useSWR from 'swr';

import axios from '@/app/axios';

import SavedDetailsForm from '@/app/components/saved-details/SavedDetailsForm';




const fetcher = async (url: string) => {
    const response = await axios.get(url);

    return response.data;
}

const EditCustomerDetailsPage = () => {

    // const { data, error } = useSWR(`/cloth/:id`, fetcher);

    return (
        <main>
            <SavedDetailsForm />
        </main>
    )
}

export default EditCustomerDetailsPage