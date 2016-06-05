
function Map(posts) {
  this._posts = posts;
}

Map.prototype.LookingForPerson = function(name) {
  	var posts_contain_person_name = [];
    for(i=0; i<this._posts.length; i++)
 	{
 		if(this._posts[i].includes(name))
 			posts_contain_person_name.push(this._posts[i]);
 	}
 	return posts_contain_person_name;
 };
 Map.prototype.inconsistencyOfMap = function(name) {
 	var posts_contain_person_name = [];
 	for(i=0; i<this._posts.length; i++)
 	{
 		if(this._posts[i].includes(name))
 			posts_contain_person_name.push(this._posts[i]);
    }
 if(posts_contain_person_name.length > 1)
	return true;
  	return false;
  };

 Map.prototype.findLocation = function(name) {	
 	for(i=0; i<this._posts.length; i++)
 	{
 		if(this._posts[i].includes(name))
 			return true;
 	}
 	return false;
  };

module.exports = Map;
