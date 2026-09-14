import type { StreamService, StreamsHealth } from '../../interface/streams/StreamService';

export const streamService: StreamService = {
  getHealth(): StreamsHealth {
    return { 
      status: 'ok', 
      service: 'streams', 
      timestamp: new Date().toISOString() };
  },
};
