const cluster = require('cluster');

const CPUCount =
  process.env.NODE_ENV === 'production' ? require('os').cpus().length : 1;

// eslint-disable-next-line no-unused-vars
cluster.on('disconnect', (worker, code, signal) => {
  global.console.log(`Worker ${worker.id} died`);
  cluster.fork();
});

cluster.on('online', worker => {
  global.console.log(`Worker ${worker.id} running`);
});

for (let i = 0; i < CPUCount; i += 1) {
  cluster.fork();
}
