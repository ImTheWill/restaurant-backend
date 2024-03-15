-- migrate:up
DROP TABLE reveiws;

CREATE TABLE `reviews` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `review` varchar(255),
  `user_id` integer,
  `menu_id` integer,
  `created_at` timestamp,
  `updated_ap` timestamp
);

ALTER TABLE `reviews` ADD FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`);

ALTER TABLE `reviews` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

-- migrate:down

