import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import contactForm from './contactForm'
import orders from './orders'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,orders,contactForm],
}
