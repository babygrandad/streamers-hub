import { streamService } from '../../../logic/streams/streamService';

export function GET() {
  return Response.json(streamService.getHealth());
}
