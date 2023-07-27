import SavedDetailsItem from '@/app/components/saved-details/SavedDetailsItem';

import data from '@/app/dashboard/saved-details/data.json';

import type { SavedDetailsType } from '@/app/reducers/savedDetails';

type SavedDetailsWithIdType = SavedDetailsType & {
    id: string
}

const SavedDetailsList = () => {

    const savedDetails: SavedDetailsWithIdType[] = data;

    return (
        <ul>
            {savedDetails.map((customer) => <SavedDetailsItem key={customer.id} customer={customer} />)}
        </ul>
    )
}

export default SavedDetailsList;