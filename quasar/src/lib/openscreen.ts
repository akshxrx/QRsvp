import { metaQR } from './models';

const { Openscreen } = require('@openscreen/sdk');
require('dotenv').config();
const os = new Openscreen().config({
  key: process.env.OS_API_KEY,
  secret: process.env.OS_API_SECRET,
});

const projectId = '1a877553-f7e3-4bb9-a5bb-0dd0cfa7e28e';

/**
 * creates an asset object
 * @param metaData object that contains meta data
 *
 * Asset object is a physical or digital object that is represented by a QR code.
 * e.g Companies, Products etc..
 */
export async function createAsset(metaData: metaQR) {
  // Asset creation,
  const res = await os.project(projectId).assets().create(metaData);
  console.log(res);
}
