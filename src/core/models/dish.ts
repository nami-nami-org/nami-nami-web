interface DishModel {
  id: number

  name: string
  description?: string
  discount: number
  price: number
  prepTime: number
  avgRating?: number | null

  imageUrl?: string
  available: boolean

  createdAt: string

  imageUrls: string[]

  // local: LocalEntity
  // categories?: DishCategoryLinkEntity[]
  // reviews?: DishReviewEntity[]
  // ratings?: DishRatingEntity[]

  local: any
  categories?: any[]
  reviews?: any[]
  ratings?: any[]
}

export default DishModel
