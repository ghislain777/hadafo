const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "endirect", deps: [emission]
 * createTable() => "planning", deps: [emission]
 * createTable() => "programmation", deps: [emission]
 *
 */

const info = {
  revision: 10,
  name: "programmation",
  created: "2023-09-24T15:41:23.758Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "endirect",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: true,
        },
        emission: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "emission", key: "id" },
          field: "emission",
          name: "emission",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "planning",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        jourdelasemaine: {
          type: Sequelize.INTEGER,
          field: "jourdelasemaine",
          comment: "Jour de la semaine",
          allowNull: false,
        },
        heuredebut: {
          type: Sequelize.TIME,
          field: "heuredebut",
          comment: "heure de début",
          allowNull: false,
        },
        heurefin: {
          type: Sequelize.TIME,
          field: "heurefin",
          comment: "heure de fin",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: true,
        },
        emission: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "emission", key: "id" },
          field: "emission",
          name: "emission",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "programmation",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        dateemission: {
          type: Sequelize.DATE,
          field: "dateemission",
          comment: "Date de lemission",
          allowNull: false,
        },
        heuredebut: {
          type: Sequelize.TIME,
          field: "heuredebut",
          comment: "heure de début",
          allowNull: false,
        },
        heurefin: {
          type: Sequelize.TIME,
          field: "heurefin",
          comment: "heure de fin",
          allowNull: false,
        },
        emission: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "emission", key: "id" },
          field: "emission",
          name: "emission",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["endirect", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["planning", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["programmation", { transaction }],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
