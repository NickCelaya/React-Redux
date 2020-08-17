import React from "react";
import CommentDetail from "./CommentDetail";
import "./App.css";
import faker from "faker";

const App = () => {
	return (
		<div className='ui container comments'>
			<CommentDetail author='Nick' time='Today at 3:00am' comment="So hot!" avatar={faker.image.avatar()}/>
			<CommentDetail author='Jessica' time='Today at 10:00am' comment="I like this post!" avatar={faker.image.avatar()}/>
			<CommentDetail author='Ronan' time='Today at 5:00pm' comment="If you wrote a book I'd buy it" avatar={faker.image.avatar()}/>
		</div>
	);
};

export default App;
