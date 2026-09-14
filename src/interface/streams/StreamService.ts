export type StreamsHealth = {
  status: 'ok';
  service: 'streams';
  timestamp: string;
};

export interface StreamService {
  getHealth(): StreamsHealth;
}
