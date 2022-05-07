import { CreateAssetByProjectIdRequestBody, Openscreen } from '@openscreen/sdk';
import * as dotenv from 'dotenv';
dotenv.config();
const projectId = '1a877553-f7e3-4bb9-a5bb-0dd0cfa7e28e';
export const openScreen = new Openscreen()
  .config({
    key: process.env.OS_API_KEY,
    secret: process.env.OS_API_SECRET,
  })
  .project(projectId);

/**
 * creates an asset object
 * @param metaData object that contains meta data
 *
 * Asset object is a physical or digital object that is represented by a QR code.
 * e.g Companies, Products etc..
 */
export async function createAsset(metaData: CreateAssetByProjectIdRequestBody) {
  // Asset creation,
  const res = await openScreen.assets().create(metaData);
  console.log(res);
}
