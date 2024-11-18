INSERT INTO public.users (id, name, email, password)
VALUES
    (gen_random_uuid(), 'User 1','user1@example.com', '$2a$10$qcfW5TnNPn/KiG1CHVTPhe3iOORSuH/NKgglEDX.2rOHCGG5VlWlG'),
    (gen_random_uuid(), 'User 2','user2@example.com', '$2a$10$Xn2qq5sAcZQoQYK49qXpi.kGRLn9X4WWucg5nyqwSSRsXP6B5hrT2');
