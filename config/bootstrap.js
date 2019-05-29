/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function(cb) {
  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  sails.on('lifted', async function() {
    var adminUser = await User.findOne({
      username: 'admin'
    });

    if (!adminUser) {
      sails.log('Could not find any admin user.');
      sails.log('Creating admin user...');
      await User.create({
        username: 'admin',
        password: 'severarocks',
        admin: true
      });
      sails.log('User admin created!');
    } else {
      sails.log('Admin already created.');
    }
    // lol
  });

  cb();
};