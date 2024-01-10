DROP TABLE IF EXISTS public.foods;

CREATE TABLE IF NOT EXISTS public.foods
(
    item_id int NOT NULL DEFAULT AUTO_INCREMENT,
    item_name varchar(200) NOT NULL,
    serving_size int NOT NULL,
    serving_size_type varchar(100) NOT NULL,
    total_calories integer,
    fat int,
    carbs int,
    protein int,
    PRIMARY KEY (item_id)
)