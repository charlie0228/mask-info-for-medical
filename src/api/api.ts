import axios from 'axios';

export const getData = async (): Promise<maskData> => {
  const { data } = await axios.get<maskData>('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json');
  return data;
}

export interface maskData {
  type: string
  features: Feature[]
}

export interface Feature {
  type: string
  properties: Property
  geometry: Geometry
}

export interface Property {
  id: string
  name: string
  phone: string
  address: string
  mask_adult: number
  mask_child: number
  updated: string
  available: string
  note: string
  custom_note: string
  website: string
}

export interface Geometry {
  type: string
  coordinates: number[]
}
