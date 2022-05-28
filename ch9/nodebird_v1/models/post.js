const Sequelize = require('sequelize');

class Post extends Sequelize.Model {
  static init(sequelize) {
    const postAttr = {
      content: {
        type: Sequelize.STRING(140),
        allowNull: false,
      },
      img: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
    };

    const postTbl = {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Post',
      tableName: 'posts',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    };

    return super.init(postAttr, postTbl);
  }

  static associate(db) {
    // cloum 이름 : UserId 자동 생성 ==> foreign key로 설정 
    // target key : User 모델의 id가 됨
    db.Post.belongsTo(db.User);
  }
}

module.exports = Post;