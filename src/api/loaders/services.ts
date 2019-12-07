// Import needed to enable DI within the project
import "reflect-metadata";
import { Container } from "typedi";
import { RbqWebCrawler } from "../../services/RbqWebCrawler";

export default async () => {
    Container.set("rbq.webCrawler", new RbqWebCrawler());
};
