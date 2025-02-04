import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'
import { FaLaptopHouse } from 'react-icons/fa'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
